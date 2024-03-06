import './App.css';
import Table from './components/table';

const esercizio = [
  {question :'Cos’è ReactJS?',answer : 'ReactJS è una libreria Frontend per la creazione di interfacce utente sviluppata da Meta che permette l` aggiornamento dell`interfaccia senza dover ricaricare l`intera pagina e quindi evitando la richiesta al server'},
  {question :'ReactJS è un framework, non una libreria.',answer : 'Falso'},
  {question :'Il file package.json contiene…',answer : 'Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione'},
  {question :'create-react-app è l’unico modo possibile per creare un’applicazione React.',answer : 'Falso'},
  {question :'Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?',answer : 'npx create-react-app test'},
  {question :'Cos’è un componente React?',answer : 'Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione'},
  {question :'Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.',answer : 'Falso'},
  {question :'Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile.',answer : 'Vero'},
  {question :' Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario ',answer : 'Vero'},
  {question :'Da dove possono venire recuperate le props all’interno di un componente React creato come classe?',answer : " Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’"}
]
function App() {
  return (
    <>
      <div className='container-fluid p-5 my-5'>
        <h1 className='text-center fw-bolder mb-5'>Risposte esercizio REACTJS</h1>
        <Table data={esercizio}></Table>
      </div>
    </>
  );
}

export default App;
