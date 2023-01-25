import { Card } from "./ui/Card"
import classes from "./TodoList.module.css"
import { Button } from './ui/Button';


export const TodoList = (props) => {

    return <Card className={classes.addList__container}>
        <ul>
            {props.list.map(li => {
                return (
                // <div key={li.id}>
                <li key={li.id} className={li.complete ? classes['strike'] : ''} >
                    <input type="checkbox" id={li.id} defaultChecked={li.complete}  onChange={() => { props.toggle(li.id) }}/>
                    <label htmlFor={li.id}
                    >{li.todo}</label>
                    <span className={classes.date}>{li.date}</span>   
                    <Button onClick={() => props.deleteList(li.id)}>Delete</Button>

                </li>
                //   </div>
                  ) 
            })}
        </ul>

    </Card>
}