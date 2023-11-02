import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid
        className="animate__animated animate_fadeIn animate__faster"
        container
        direction={'row'}
        justifyContent={'space-between'}
        mb={1}
        alignItems={'center'}
        sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight={'light'}>
                    30 de agosto, 2023
                </Typography>
            </Grid>

            <Grid item>
                <Button color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}></SaveOutlined>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label="Titulo"
                    sx={{border:'none', mb: 1}}
                />
                <TextField
                    type="text"
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que paso?'
                    label="Nota"
                    minRows={5}
                />
            </Grid>

            {/* Image gallery */}

            <ImageGallery />

    </Grid>
  )
}
