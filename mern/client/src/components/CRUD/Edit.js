import { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};

class Edit extends Component {
    constructor(props) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
        this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
            records: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Edit/" + this.state.id)
            .then((response) => {
                this.setState({
                    person_name: response.data.person_name,
                    person_position: response.data.person_position,
                    person_level: response.data.person_level,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value,
        });
    }

    onChangePersonPosition(e) {
        this.setState({
            person_position: e.target.value,
        });
    }

    onChangePersonLevel(e) {
        this.setState({
            person_level: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newEditedperson = {
            person_name: this.state.person_name,
            person_position: this.state.person_position,
            person_level: this.state.person_level,
        };
        console.log(newEditedperson);

        axios
            .post(
                "http://localhost:5000/update/" + this.props.match.params.id,
                newEditedperson
            )
            .then((res) => console.log(res.data));

        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Record</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person's Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_position}
                            onChange={this.onChangePersonPosition}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Intern"
                                checked={this.state.person_level === "Intern"}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className="form-check-label">Intern</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Junior"
                                checked={this.state.person_level === "Junior"}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className="form-check-label">Junior</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="Senior"
                                checked={this.state.person_level === "Senior"}
                                onChange={this.onChangePersonLevel}
                            />
                            <label className="form-check-label">Senior</label>
                        </div>
                    </div>
                    <br />

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Update Record"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(Edit);