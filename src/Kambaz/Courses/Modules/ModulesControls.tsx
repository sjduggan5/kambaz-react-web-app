import { FaPlus } from 'react-icons/fa6';
import GreenCheckmark from './GreenCheckmark';
import { Button, Dropdown } from 'react-bootstrap';
import GrayBlocked from './GrayBlocked';
import ModuleEditor from './ModuleEditor';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser.role === 'FACULTY' && (
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-module-btn"
          onClick={handleShow}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: '1px' }}
          />
          Module
        </Button>
      )}
      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <GrayBlocked /> Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <GrayBlocked /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        id="wd-view-progress"
        variant="secondary"
        size="lg"
        className="me-1 float-end"
      >
        View Progress
      </Button>
      <Button
        id="wd-collapse-all"
        variant="secondary"
        size="lg"
        className="me-1 float-end"
      >
        Collapse All
      </Button>
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
