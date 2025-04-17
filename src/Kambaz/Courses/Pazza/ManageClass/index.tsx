import { Button } from 'react-bootstrap';
import ManageClassNavigation from './ManageClassNavigation';

export default function ManageClass() {
  return (
    <div>
      <div className="sticky-navbar">
        <ManageClassNavigation />
      </div>
      <hr />
      <h1>Configure Class Folders</h1>
      <hr />
      <p>
        Folders allow you to keep class content organized. When students and
        instructors add a new post, they will be required to specify at least
        one folder for their post.
      </p>
      <Button className="blue-background">Disable folders</Button>
      <br />
      <br />
      <br />
      <div>
        <strong>Create new folders:</strong>
        <p>
          Add folders that are relevant for your class. Select 'numbered' to
          create numbered folders (hw1-hw4)
        </p>
      </div>
    </div>
  );
}
