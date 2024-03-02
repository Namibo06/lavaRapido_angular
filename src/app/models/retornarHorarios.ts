export type retornarHorarios={
  status:number,
  horarios_preenchidos:[
    {
      user:{
        id_user:number,
        first_name:string,
        last_name:string,
        fullName:string,
        phone:string,
        email:string
      },
      horario:{
        cod:number,
        fullHour:string,
        hourMinute:string,
        date:string,
        hour:string,
        minute:string,
        confirmado:string
      }
    }
  ]
}