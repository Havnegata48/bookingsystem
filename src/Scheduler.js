import React, { useEffect } from 'react';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css'; 


import { scheduler } from 'dhtmlx-scheduler';

function Scheduler() {

    useEffect(() => {
        scheduler.config.xml_date = "%Y-%m-%d %H:%i";
        scheduler.i18n.setLocale("nb");
        scheduler.init("scheduler_here", new Date(),"week", {theme: ""});

        // Attach events to save data when any changes are made
        scheduler.attachEvent("onEventAdded", saveData);
        scheduler.attachEvent("onEventChanged", saveData);
        scheduler.attachEvent("onEventDeleted", saveData);

        // Load initial data if any (Modify the endpoint if needed)
        fetch("http://localhost:5000/load")
        .then(response => response.json())
        .then(data => {
            scheduler.parse(data, "json");
        })
        .catch(error => {
            console.error('Failed to load events:', error);
        });

    }, []);

    function saveData() {
        const schedulerData = scheduler.serialize();
        const schedulerJSON = JSON.stringify(schedulerData);

        fetch("http://localhost:5000/save", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: schedulerJSON })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle response here
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return <div id="scheduler_here" style={{ width: '100%', height: '80vh', overflow: 'hidden' }}></div>;


}

export default Scheduler;
