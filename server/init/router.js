import fs from 'fs';
import path from 'path';

// import { router as userRouter } from '../modules/user';

const indexTemplatePath = path.normalize(path.join(__dirname, '../../client/index.html'));

export default function(app) {
  // this.use('/_/users', userRouter);

  // TODO: make 404
  app.use((req, res) => {
    fs.readFile(indexTemplatePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json(err.message);
      }

      return res.send(
        data.replace(
          '#{INITIAL_STATE}',
          JSON.stringify({ user: req.user || null })
        )
      );
    });
  });

  app.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
