import { Grid, Typography, Button, TextField } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <>

            <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ mb: 1 }}>

                <Grid>
                    <Typography fontSize={39} fontWeight='ligth'>28 de agosto, 2023</Typography>
                </Grid>
                <Grid>
                    <Button color="primary" sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>


            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    fullWidth
                    placeholder="¿Qué sucedió en el día de hoy?"
                    multiline
                    rows={5}
                    variant="filled"
                />


            </Grid>

            <ImageGallery />

        </>
    )
}
