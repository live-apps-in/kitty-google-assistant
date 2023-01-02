import { dialogflow } from 'actions-on-google';
import { welcome_message } from '../content/welcome';
import { PlayGame } from '../service/PlayGame';

///Dialog Flow App
const app = dialogflow({ debug: false });

///Welcome Intent
app.intent('WelcomeIntent', (conv) => {
	conv.ask(welcome_message);
});

///Hello World Intent
app.intent('HelloWorld', (conv) => {
	conv.ask(welcome_message);
});

///Play Game Intent
app.intent('PlayGameIntent', (conv, { gameAction, game }) => {
	PlayGame(gameAction, game);
	conv.ask('hello game!');
});

export default app;