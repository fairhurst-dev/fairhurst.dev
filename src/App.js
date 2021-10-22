import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid xs={12} container item>
          <AppBar>
            <Toolbar>
              {" "}
              <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                caroline-fairhurst
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid container item>
          <Paper>
            {" "}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Here's some content
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
