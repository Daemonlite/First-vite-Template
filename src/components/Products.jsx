import products from '../mock';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Products() {
  return (
    <div className='card'>
      {products.products.map((res) => (
        <Card key={res.productName} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 160 }}
            image={res.image}
            title="Product Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {res.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore beatae incidunt quisquam  a.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to cart</Button>
            <Button size="small">View More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}