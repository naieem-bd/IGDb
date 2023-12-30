import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenreList from '../hooks/useGenreList';
import croppedImgUrl from '../services/img-cropping';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { isLoading, error, data } = useGenreList();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='30px'
              borderRadius={5}
              src={croppedImgUrl(genre.image_background)}
            />
            <Button
              fontSize='lg'
              fontWeight={genre.id === genreId ? 'bold' : 'normal'}
              variant='link'
              onClick={() => setGenreId(genre.id)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
