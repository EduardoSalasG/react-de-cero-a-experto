import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ab blanditiis odio dolore soluta dolores. Enim sequi architecto blanditiis aut nisi, tempora dolores porro molestias molestiae voluptatem magni, ab exercitationem.</Typography> */}

            <NothingSelectedView />

            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}
