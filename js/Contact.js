var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'row contactItem'}>
        <div className={'col-md-4 img-container'}>
            <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
        </div>
        <div className={'col-md-8 details-container'}>
            <p className={'contactLabel'}>
              Imię: {this.props.item.firstName}
            </p>
            <p className={'contactLabel'}>
              Nazwisko: {this.props.item.lastName}
            </p>
            <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
            </a>
        </div>
      </div>
      )
    }
});
