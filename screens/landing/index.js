import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Button } from 'zahir-ui';
import Box from '@material-ui/core/Box';
import { withTranslation } from 'i18n';

function Index({ t }) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography scale="800">
          Next.js example {t('home')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 12 }}
        >
          Button
        </Button>
      </Box>
    </Container>
  );
}

export default withTranslation('common')(Index);
