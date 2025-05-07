import * as React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { green } from '@mui/material/colors'

export default function GenericModal({ setOpen, open, setOpts, opts }) {
  const handleClose = () => {
    setOpen(false);
    setOpts({});
  };

  // Types: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | string
  const objModal = {
    maxWidth: opts.width || 'md',
    title: opts.title || 'Confirmar',
    color_title: opts.color_title || green[700],
    content: opts.content || (<></>),
  };

  return (
    <Grid container spacing={2}>
      <Dialog fullWidth={true} maxWidth={objModal?.maxWidth} open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: objModal?.color_title }}>
          {objModal?.title}
        </DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
            }}
          >
            {objModal.content}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success" variant="outlined">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
