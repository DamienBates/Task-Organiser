import React from 'react'

const EditCode = () => {
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
    )
}

export default EditCode
