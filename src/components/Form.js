import '../css/Form.css';

const Form = () => {
    return (
     <div id="form">
         <h3>CONTACT US</h3>
         <form action="#" id="theForm">
             <input type="text" id="firstname" placeholder="FIRST NAME"/>
             <input type="text" id="lastname" placeholder="LAST NAME"/>
             <input type="text" id="mail" placeholder="MAIL ADRESS"/>
             <textarea id="message" placeholder="MESSAGE"> </textarea>
         </form>
     </div>
    );
}

export default Form;