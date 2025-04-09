import React, { useState, useEffect } from 'react';
import Styles from "./ContentEditor.module.scss";
import MyEditor from "./Editor";

function ContentEditor({ data, updateTask }) {
    const [localData, setLocalData] = useState({
        ...data,
        title: data?.title || ""
    });

    function parseDMY(dateStr) {

        const [month, day, year] = dateStr?.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
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


    const handleHeadingEdit = (e) => {
        const updated = { ...localData, title: e.target.value };
        setLocalData(updated);
        updateTask(updated);
    };

    return (
        <div className={Styles.ContentEditor_Container}>
            <input
                type="text"
                className={Styles.ContentEditor_heading}
                placeholder="Enter Heading Here.."
                value={localData?.title}
                onChange={handleHeadingEdit}
            />
            <div className={Styles.ContentEditor_Content}>
                <span>
                    <input className={Styles.ContentEditor_C_DateSelect} type='date' value={localData?.due} />
                    <span className={Styles.ContentEditor_C_PrioritySelect}>
                        <select style={{ color: localData?.priority === "High" ? "red" : localData?.priority === "Medium" ? "yellow" : "#65fe08" }} value={localData?.priority} name="priority" id="priority">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </span>
                </span>

                <textarea placeholder='enter a description here' />
            </div>
            <div className={Styles.ContentEditor_notes}>
                <MyEditor initialData={localData?.description} />
            </div>

        </div>
    );
}

export default ContentEditor;
