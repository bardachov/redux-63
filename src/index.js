import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRQ from './AppRQ';

import './index.css';

export const queryClient = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppRQ />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
