import React,{Component} from 'react'
import { render } from "@testing-library/react"
import './Pokecard.css'
const pokeapi='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
function idprefix(id){
if(id<10){ 
    return "00"+id
}
else if(id<100){
    return "0"+id
}
else{
    return id
}
}
class Pokecard extends Component{
    
    render(){
        var prefixedID=idprefix(this.props.id)
        const imgsrc=pokeapi+prefixedID+'.png'
        console.log(imgsrc)
                return(
            <div className='Pokecard'>
                <h2>{this.props.name}</h2>
                <div className="Pokecard-img">
                <img  src={imgsrc}/>
                </div>
                <h3>Type: {this.props.type}</h3>
                <h3>Exp: {this.props.exp}</h3>
            </div>
        )
    }
    }

export default Pokecard
