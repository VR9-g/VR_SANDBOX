import React from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

const activityImageStyle = {
  filter: 'brightness(30%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

export const ActivityDetailedHeader:React.FC<{activity:IActivity}> = ({activity}) => {
    return (

            <Segment.Group>
              <Segment basic attached='top' style={{ padding: '0' }}>
                <Image src={`/assets/Status/${activity.status}.jpg`} fluid style={activityImageStyle}/>
                <Segment basic style={activityImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size='huge'
                          content={activity.name}
                          style={{ color: 'white' }}
                        />
                        <p>{format(activity.date,'eeee do MMMM')}</p>
                        <p>
                          Hosted by <strong>surya</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
              <Segment clearing attached='bottom'>
                <Button color='teal'>Join Activity</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${activity.id}`} color='orange' floated='right'>
                  Manage Event
                </Button>
              </Segment>
            </Segment.Group>

    )
}

export default observer(ActivityDetailedHeader);
