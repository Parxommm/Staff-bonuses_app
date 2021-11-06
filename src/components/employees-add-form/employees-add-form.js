import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        console.log(evt);
        if (evt.target.name === 'name') {
            if (evt.target.value.length < 3) {
                evt.target.setCustomValidity('Минимум 3 символа');
            } else {
                evt.target.setCustomValidity('');
            }
        }

        if (evt.target.name === 'salary') {
            if (evt.target.value < 100) {
                evt.target.setCustomValidity('Минимум 100, не жадничай');
            } else {
                evt.target.setCustomValidity('');
            }
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.name.length >= 3 && this.state.salary >= 100) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
            console.log(evt);
        }
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}
                    >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;