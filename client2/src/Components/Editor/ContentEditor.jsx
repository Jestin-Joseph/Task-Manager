import React, { useState, useEffect } from 'react';
import Styles from "./ContentEditor.module.scss";
// import MyEditor from "./Editor";

function ContentEditor({ data, updateTask, close }) {
    const [localData, setLocalData] = useState({
        ...data,
        title: data?.title || ""
    });

    function parseDMY(dateStr) {
        const [month, day, year] = dateStr?.split('/');
        return `${year}-${month.padStart(2, '0')}-${day?.padStart(2, '0')}`;
    }

    useEffect(() => {
        const today = new Date();
        const todayDate = today.toLocaleDateString();
        setLocalData({
            ...data,
            title: data?.title || "",
            due: data?.due ? parseDMY(data?.due) : parseDMY(todayDate)
        });
    }, [data]);


    const handleEdit = (type, value) => {
        const updated = { ...localData, [type]: value };
        setLocalData(updated);
    }

    const onSaveChanges = () => {
        const [year, month, day] = localData.due.split("-")
        const dueDate = month + "/" + day + "/" + year
        updateTask({ ...localData, due: dueDate });
        close();
    }

    return (
        <div className={Styles.ContentEditor_Container}>
            <input
                type="text"
                className={Styles.ContentEditor_heading}
                placeholder="Enter Heading Here.."
                value={localData?.title}
                onChange={(e) => { handleEdit("title", e.target.value) }}
            />
            <div className={Styles.ContentEditor_Content}>
                <span>
                    <input className={Styles.ContentEditor_C_DateSelect} onChange={(e) => { handleEdit("due", e.target.value) }} type='date' value={localData?.due} />
                    <span className={Styles.ContentEditor_C_PrioritySelect}>
                        <select onChange={(e) => { handleEdit("priority", e.target.value) }} style={{ color: localData?.priority === "High" ? "red" : localData?.priority === "Medium" ? "yellow" : "#65fe08" }} value={localData?.priority} name="priority" id="priority">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </span>
                </span>

                <textarea
                    className={Styles.ContentEditor_C_DescBox}
                    value={localData?.description}
                    onChange={(e) => { handleEdit("description", e.target.value) }}
                    placeholder='enter a description here'
                />
            </div>
            <button className={Styles.ContentEditor_saveBtn} onClick={onSaveChanges}>
                Save Changes
            </button>



        </div>
    );
}

export default ContentEditor;
