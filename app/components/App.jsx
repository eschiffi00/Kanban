import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

// export default () => <Notes/>;

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            notes : [
                {
                    id: uuid.v4(),
                    task: 'learn react'
                },
                {
                    id: uuid.v4(),
                    task: 'kill someone'
                },
                {
                    id: uuid.v4(),
                    task: 'dig a grave'
                }
            ]
        };
    }
    render(){
        const {notes} = this.state;
        return(
            <div>
                <button onClick={this.addNote}>+</button>
                {/* <Notes notes={notes} onDelete={this.deleteNote}/> */}
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
            </div>
        );
    }
    addNote = () =>{
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }
    deleteNote =(id,e) =>{
        e.stopPropagation();
        this.setState({
            notes:this.state.notes.filter(note=>note.id !==id)
        });
    }
    activateNoteEdit = (id) =>{
        this.setState({
            notes:this.state.notes.map(note =>{
                if(note.id === id){
                    note.editing = true;
                }
                return note;
            })
        });
    }
    editNote = (id,task) => {
        this.setState({
            notes:this.state.notes.map(note =>{
                if(note.id === id){
                note.editing= false;
                note.task = task;
                }
            })
        });
    }
}