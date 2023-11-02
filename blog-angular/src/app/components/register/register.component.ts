import { Component } from '@angular/core';
import { user } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {
  public page_title: string;
  public user: user;
  public status: string;

  constructor(
      private _userService: UserService
    ){
    this.page_title = 'Registrate';
    this.user = new user(1,'','','ROLE_USER','','','','');
    this.status='';
  }

  ngOnInit(){
   // console.log('componente de registro lanzado !!');
    //console.log(this._userService.test());
  }

  onSubmit(form:any){
    //llamo la funcion register del servicio y envio el usuario y recibo los posibles errores
    console.log(this.user);
    this._userService.register(this.user).subscribe({
      next: response => {
        if(response.status == "success"){
          this.status="success";
          form.resetForm();
        }else {
          this.status="error";
        }
      },
      error: err => {
        this.status='error';
      }     
    })   
  }

}
