import { ListGroup } from 'react-bootstrap';
import Add from './Add';
import AddPathParameters from './AddPathParameters';
import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays';
import ArrayIndexAndLength from './ArrayIndexAndLength';
import ArrowFunctions from './ArrowFunctions';
import BooleanVariables from './BooleanVariables';
import Classes from './Classes';
import ConditionalOutputIfElse from './ConditionalOutputIfElse';
import ConditionalOutputInline from './ConditionalOutputInline';
import Destructing from './Destructing';
import DestructingImports from './DestructingImports';
import FilterFunction from './FilterFunction';
import FindFunction from './FindFunction';
import FindIndex from './FindIndex';
import ForLoops from './ForLoops';
import FunctionDestructing from './FunctionDestructing';
import Highlight from './Highlight';
import House from './House';
import IfElse from './IfElse';
import ImpliedReturns from './ImpliedReturns';
import JsonStringify from './JsonStringify';
import LegacyFunctions from './LegacyFunctions';
import MapFunction from './MapFunction';
import PathParameters from './PathParameters';
import SimpleArrays from './SimpleArrays';
import Spreading from './Spreading';
import Square from './Square';
import Styles from './Styles';
import TemplateLiterals from './TemplateLiterals';
import TernaryOperator from './TernaryOperator';
import VariableTypes from './VariableTypes';
import VariablesAndConstants from './VariablesAndConstants';
import TodoList from './todos/TodoList';
import { useSelector } from 'react-redux';

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  console.log('Hello World!');
  return (
    <div>
      <h2>Lab 3</h2>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturns />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <AddPathParameters />
      <PathParameters />
    </div>
  );
}
