import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area='nav' bg='pink'>
        NavBar
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='gold'>
          sideBar
        </GridItem>
      </Show>
      <GridItem area='main' bg='coral'>
        MainContent
      </GridItem>
    </Grid>
  );
}

export default App;
