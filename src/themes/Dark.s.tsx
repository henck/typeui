import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from './../StorybookBase.s';
import { Header } from '../controls/Header';
import { Accordion } from '../controls/Accordion';
import { Button } from '../controls/Button';
import { Divider } from '../controls/Divider';
import { Card } from '../controls/Card';
import { Checkbox } from '../controls/Checkbox';
import { DataTable } from '../controls/DataTable';
import { Dropdown } from '../controls/Dropdown';
import { Input } from '../controls/Input';
import { Label } from '../controls/Label';
import { Icon } from '../controls/Icon';
import { Image } from '../controls/Image';
import { Message } from '../controls/Message';
import { Progress } from '../controls/Progress';
import { Segment } from '../controls/Segment';
import { Textarea } from '../controls/Textarea';
import { ThemeProvider, Theme, IThemeInterface } from '../styles/Theme';
import { TDir } from '../controls/Types';

const MyTheme: IThemeInterface = {
  ...Theme,
  fontColor: '#fff',
  background: '#333',
  normalColor: '#666',
}

storiesOf('Themes', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All controls. 
    `
  })
  .addWithJSX(
    'Dark',
  () => (
  <div>
    <ThemeProvider theme={MyTheme}>
      <div style={{background: MyTheme.background, color: MyTheme.fontColor, padding: '30px'}}>
        <Header size="h1">Header 1</Header>
        <Header size="h2">Header 2</Header>
        <Header size="h3">Header 3</Header>
        <Header size="h4">Header 4</Header>
        <Header size="h5">Header 5</Header>
        <Header size="h6">Header 6</Header>

        <Accordion>
          <Accordion.Tab title="What is a dog?">
            <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </Accordion.Tab>
          <Accordion.Tab title="What kinds of dogs are there?">
            <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
          </Accordion.Tab>
          <Accordion.Tab title="How do you acquire a dog?">
            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
          </Accordion.Tab>
        </Accordion>    

        <Accordion styled>
          <Accordion.Tab title="What is a dog?">
            <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </Accordion.Tab>
          <Accordion.Tab title="What kinds of dogs are there?">
            <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
          </Accordion.Tab>
          <Accordion.Tab title="How do you acquire a dog?">
            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
          </Accordion.Tab>
        </Accordion>    


        <Button>Standard</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button positive>Positive</Button>
        <Button negative>negative</Button>

        <Button basic>Basic</Button>
        <Button basic primary>Primary</Button>
        <Button basic secondary>Secondary</Button>
        <Button basic positive>Positive</Button>
        <Button basic negative>negative</Button>

        <Divider/>

        <Card>
          <Card.Header>
            Card Header
          </Card.Header>
          <Card.Meta>
            Card Meta
          </Card.Meta>
          <Card.Content>
            Card content one.
          </Card.Content>
          <Card.Content>
            Card content two.
          </Card.Content>
        </Card>    

        <Card>
          <Card.Header>
            Card Header
          </Card.Header>
          <Card.Meta>
            Card Meta
          </Card.Meta>
          <Card.Content>
            Card content one.
          </Card.Content>
          <Card.Content secondary>
            Card content two.
          </Card.Content>
        </Card>        

        <Divider/>

        <Checkbox label="Checkbox"/>
        <Checkbox label="Disabled" disabled/>
        <Checkbox label="Error" error/>

        <Checkbox checked label="Checkbox"/>
        <Checkbox checked label="Disabled" disabled/>
        <Checkbox checked label="Error" error/>

        
        <Divider/>
        
        <Checkbox type="toggle" label="Checkbox"/>
        <Checkbox type="toggle" label="Disabled" disabled/>
        <Checkbox type="toggle" label="Error" error/>    

        <Checkbox checked type="toggle" label="Checkbox"/>
        <Checkbox checked type="toggle" label="Disabled" disabled/>
        <Checkbox checked type="toggle" label="Error" error/>    
        
        <Divider/>
        
        <Checkbox type="slider" label="Checkbox"/>
        <Checkbox type="slider" label="Disabled" disabled/>
        <Checkbox type="slider" label="Error" error/>    

        <Checkbox checked type="slider" label="Checkbox"/>
        <Checkbox checked type="slider" label="Disabled" disabled/>
        <Checkbox checked type="slider" label="Error" error/>    

        <Divider/>
        
        <Checkbox type="circle" label="Checkbox"/>
        <Checkbox type="circle" label="Disabled" disabled/>
        <Checkbox type="circle" label="Error" error/>

        <Checkbox checked type="circle" label="Checkbox"/>
        <Checkbox checked type="circle" label="Disabled" disabled/>
        <Checkbox checked type="circle" label="Error" error/>        
        
        <Divider/>

        <Dropdown placeholder="Standard Dropdown" label={(item:any) => item.name} data={[{id: 1, name: '.com'}, {id: 2, name:'.net'}, {id: 3, name:'.org'}, {id: 4, name:'.online'}, {id: 5, name:'.xyz'}, {id: 6, name:'.software'}, {id: 7, name:'.io'}, {id: 8, name:'.edu'}, {id: 9, name:'.tech'}]}>
          <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        </Dropdown>

        <Dropdown disabled placeholder="Disabled" label={(item:any) => item.name} data={[{id: 1, name: '.com'}, {id: 2, name:'.net'}, {id: 3, name:'.org'}, {id: 4, name:'.online'}, {id: 5, name:'.xyz'}, {id: 6, name:'.software'}, {id: 7, name:'.io'}, {id: 8, name:'.edu'}, {id: 9, name:'.tech'}]}>
          <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        </Dropdown>

        <Dropdown error placeholder="Error" label={(item:any) => item.name} data={[{id: 1, name: '.com'}, {id: 2, name:'.net'}, {id: 3, name:'.org'}, {id: 4, name:'.online'}, {id: 5, name:'.xyz'}, {id: 6, name:'.software'}, {id: 7, name:'.io'}, {id: 8, name:'.edu'}, {id: 9, name:'.tech'}]}>
          <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        </Dropdown>

        <Divider/>

        <Input placeholder="Standard Input"/>
        <Input disabled placeholder="Disabled"/>
        <Input error placeholder="Error"/>
        
        <Divider/>
        
        <Input type="color" placeholder="Color Input"/>
        <Input type="color" disabled placeholder="Disabled"/>
        <Input type="color" error placeholder="Error"/>
        
        <Divider/>
        
        <Input type="date" placeholder="Date Input"/>
        <Input type="date" disabled placeholder="Disabled"/>
        <Input type="date" error placeholder="Error"/>

        <Divider/>

        <Textarea/>
        
        <Divider/>

        <Label>Standard</Label>
        <Label>Detail <Label.Detail>detail</Label.Detail></Label>
        <Label basic>Basic</Label>
        <Label pointing="left">Pointing</Label>
        <Label pointing="right">Pointing</Label>
        <Label pointing="top">Pointing</Label>
        <Label pointing="bottom">Pointing</Label>
        <Label basic pointing="left">Pointing</Label>
        <Label basic pointing="right">Pointing</Label>
        <Label basic pointing="top">Pointing</Label>
        <Label basic pointing="bottom">Pointing</Label>
        <Label tag>Tag</Label>
        <Label basic tag>Tag</Label>

        <Divider/>
        
        <Label size='mini'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Mini</Label>
        <Label size='tiny'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Tiny</Label>
        <Label size='small'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Small</Label>
        <Label size='medium'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Medium</Label>
        <Label size='large'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Large</Label>
        <Label size='big'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Big</Label>
        <Label size='huge'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Huge</Label>
        <Label size='massive'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Massive <Icon name="code"/></Label>   

        <Divider/>

        <Message>Message</Message>
        <Message type="info">Info</Message>
        <Message type="warning">Warning</Message>
        <Message type="success">Success</Message>
        <Message type="error">Error</Message>

        <Divider/>

        <Progress value={50}/>
        <Progress background value={50}/>
        <Progress bordered value={50}/>
        <Progress numbered value={50}/>
        <Progress raised value={50}/>
        <Progress rectangular value={50}/>

        <Divider/>

        <Segment>Segment</Segment>
        <Segment raised>Raised</Segment>
        <Segment piled>Piled</Segment>
        <Segment stacked>Stacked</Segment>








        <div style={{display: 'flex', position: 'relative', height: '400px'}}>
          <DataTable 
            error={false} 
            loading={false} 
            scrollTop={0}
            onScroll={(scrollTop: number) => {}} 
            data={[
              { name: "John",   age: 24, sport: "Soccer"},
              { name: "Mary",   age: 18, sport: "Polo"},
              { name: "Bert",   age: 21, sport: "Basketball"},
              { name: "Joseph", age: 24, sport: "Kendo"},
              { name: "Rose",   age: 17, sport: "Soccer"},
              { name: "Alexander",  age: 15, sport: "Athletics"},
              { name: "Rudolph", age: 29, sport: "Krav maga"},
              { name: "Jessica", age: 19, sport: "None"},
              { name: "Ellen", age: 16, sport: "Athletics"},
              { name: "Ralph", age: 22, sport: "Volleyball"},
            ]} 
            onFetch={(offset: number, count: number) => {}} 
            onOrder={(order: string, dir?: TDir) => {}} 
            order="name" 
            dir="asc">

            <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:any) => item.name}</DataTable.Column>
            <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:any) => item.age}</DataTable.Column>
            <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:any) => item.sport}</DataTable.Column>

          </DataTable>
        </div>  

      </div>
    </ThemeProvider>
  </div>
  ));  

  