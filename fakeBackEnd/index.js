/*

NOTE POUR LE LECTEUR

Back end simplifié pour démo du front. Aucune SOC...

*/
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3080;

app.use(cors({ origin: '*'}));

app.get('/phase', (req, res) => {
  res.json({
    'status': 1,
    'phase': 'ok',
  });
});

app.post('/play', (req, res) => {
    res.json({
      'status': 1,
      'prize': 1,
      'prizeDetail': {
        title: 'le gros lot',
        text: 'Un lot qu\'il est super bien !',
      }
    });
  });

app.listen(port, () => {
  console.log(`fake BackEnd for demo only is running on port ${port}`);
});