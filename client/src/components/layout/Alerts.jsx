import React, { Fragment, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <Fragment>
      {alerts.length > 0 && alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      ))}
    </Fragment>
  );
};

export default Alerts;
