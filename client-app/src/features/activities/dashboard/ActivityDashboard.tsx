import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
    activities : IActivity[];
    selectActivity: (id:string) => void;
    selectedActivity :IActivity | null; 
    editMode : boolean;
    setEditMode : (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActvity:(activity:IActivity) => void;
    editActivity:(activity:IActivity) => void;
    deleteActivity:(id:string) => void;
}

export const ActivityDashboard: React.FC<IProps> = (
    {   activities,
        selectActivity,
        selectedActivity,
        editMode,
        setEditMode,
        setSelectedActivity,
        createActvity,
        editActivity,
        deleteActivity
    }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {
                    selectedActivity &&  !editMode &&
                    <ActivityDetails 
                        activity ={selectedActivity}
                        setEditMode={setEditMode}
                        setSelectedActivity={setSelectedActivity}
                        
                    />
                }
                {
                    editMode  &&
                    <ActivityForm
                        key={selectedActivity?.id || 0}
                        setEditMode = {setEditMode}
                        activity ={selectedActivity!}
                        createActvity={createActvity}
                        editActivity={editActivity}
                    />
                }       
            </Grid.Column>
        </Grid>
    )
}