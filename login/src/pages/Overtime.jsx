import { useState } from "react";
import Footer from '../components/Footer';
const Overtime = () => {
    const [name, setName] = useState("");

    const [formData, setFormData] = useState({
        fullName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform actions with the form data
        console.log(formData);
    };

    return (
        <>
         <div className="employee-background">
            <div>

                <h2>Request for Overtime</h2>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                 <label htmlFor="Date">Date:</label>
                <input
                    type="Date"
                    id="Date"
                    name="Date"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                 <label htmlFor="Time">Time:</label>
                <input
                    type="Time"
                    id="Time"
                    name="Time"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
              <label htmlFor="project">Project:</label>
                    <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    >
                    <option value="">Select a project</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>

                    </select>
                    <label htmlFor="activity">Activity:</label>
                    <select
                    id="activity"
                    name="activity"
                    value={formData.project}
                    onChange={handleChange}
                    >
                    <option value="">Select an Activity</option>
                    <option value="Project 1">Activity 1</option>
                    <option value="Project 2">Activity 2</option>
                    <option value="Project 3">Activity 3</option>

                    </select>
                <button type="submit">Submit</button>
            </form>
                    </div>
        </div>
<Footer/>
        </div>
        </>
    );
};

export default Overtime;