import { ChangeEvent, Component } from "react";
// This will require to npm install axios
import axios from 'axios';

interface MyProps { }
interface MyState {
    task: string,
    comments: string,
    priority: string,
    records: Array<string>
}

class Edit extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
        this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: "",
            comments: "",
            priority: "",
            records: [],
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/Edit/id:`)
            .then((response) => {
                this.setState({
                    task: response.data.task,
                    comments: response.data.comments,
                    priority: response.data.priority,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangePersonName(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            task: e.target.value,
        });
    }

    onChangePersonPosition(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            comments: e.target.value,
        });
    }

    onChangePersonLevel(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            priority: e.target.value,
        });
    }

    onSubmit(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const newEditedperson = {
            task: this.state.task,
            comments: this.state.comments,
            priority: this.state.priority,
        };
        console.log(newEditedperson);

        axios
            .post(
                `http://localhost:5000/update/id:`,
                newEditedperson
            )
            .then((res) => console.log(res.data));
    }

    render() {
        return (
            <div>
                <h3>Update Record</h3>
                <form onSubmit={() => this.onSubmit}>
                    <div className="form-group">
                        <label>Person's Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.task}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.comments}
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
                                checked={this.state.priority === "Intern"}
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
                                checked={this.state.priority === "Junior"}
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
                                checked={this.state.priority === "Senior"}
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

export default Edit;