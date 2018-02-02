// app.js
var App = React.createClass({

  render: function() {
    return (
      <div className='app'>
        <ContactForm contact={contactForm}/>
        <Contacts items={contacts}/>
      </div>
    );
  }
});
