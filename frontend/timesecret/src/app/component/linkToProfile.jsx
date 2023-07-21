import FlechaIrAPerfil from './fkechaIrAPerfil'

export default function LinkToProfile(params) {


    if(params.isPublic=="public"){
        return   <a href={`/Profile/${params.username}`}  id="irPerfil" className="disabled:hidden"><FlechaIrAPerfil></FlechaIrAPerfil></a>
    }
    if(params.isPublic=="anonimo"){
        return <a   id="irPerfil" className="disabled:hidden"></a>
    }

    

}
