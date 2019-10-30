import React from 'react';
import Input from '../presentational/input';
import ReactDom from 'react-dom';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            titulo: 'titulo',
            descripcion: 'descripcion',
            contenido:'contenido'
        }
        this.onChange = this.onChange.bind(this);
    }
  

    onChange(event) {
        this.setState( {[event.target.id]: event.target.value});
    }

    render() {
        //return React.createElement('p', {className:'parrafo'}, 'lorem ipsum')
        return (
            <div style={{backgroundColor: '#000', color:'#fff', padding:'1rem'}}>
                <form id="articulo-formulario" className="formulario">
                    <Input 
                    label="Titulo"
                    type="text"
                    id="titulo"
                    value={this.state.titulo}
                    onChange={this.onChange}
                    />
                    <Input 
                    label="Descripcion"
                    type="text"
                    id="descripcion"
                    value={this.state.descripcion}
                    onChange={this.onChange}
                    />
                    <Input 
                    label="Contenido"
                    type="text"
                    id="contenido"
                    value={this.state.contenido}
                    onChange={this.onChange}
                    />
                </form>
            </div>
        )
        
    }
}

export default Form;


ReactDom.render(<Form />, document.querySelector('#my-app'))
