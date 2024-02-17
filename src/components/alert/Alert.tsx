import Alert from '@mui/material/Alert';
import './alert.css';
import { useState } from 'react';

interface AlertDataState {
  isActive: boolean;
  severity?: 'success' | 'error' | 'warning';
  message?: string;
}

const GHAlert = () => {
  const [alertData, setAlertData] = useState<AlertDataState>({
    isActive: false,
    message: ''
  });
  window['alert_state_update'] = setAlertData;
  return alertData.isActive ? (
    <div className="alert-container">
      <Alert severity={alertData?.severity}> {alertData.message} </Alert>
    </div>
  ) : null;
};

export default GHAlert;
