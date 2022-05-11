import React from "react";
import suppliesList from "../../lib/SuppliesData";
import { Box, List, ListItem, ListItemText, Link, Grid } from "@mui/material";

const subheadings = Object.keys(suppliesList);

function SuppliesList() {
  return (
    <Box>
      <List>
        <Grid container spacing={2}>
          {subheadings.map((sub, i) => (
            <Grid key={i} item xs={12} lg={4}>
              <ListItem>
                <ListItemText primaryTypographyProps={{ fontSize: "22px" }}>
                  {sub}
                </ListItemText>
              </ListItem>
              {suppliesList[sub].map((item, j) => (
                <ListItem key={j} sx={{ ml: "1em" }}>
                  <ListItemText primaryTypographyProps={{ fontSize: "18px" }}>
                    {" "}
                    -{" "}
                    {item.url ? (
                      <Link color="#fff" target="_blank" href={item.url}>
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </ListItemText>
                </ListItem>
              ))}
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
}

export default SuppliesList;
