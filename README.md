### Usage 

```typescript
const client = new WgClient(`YOUR KEY`);
```
#### make client you want to use
```typescript
const metrics = client.metrics();

// create
const metric = await metrics.post({
	external_id: 'impressions',
	name: 'Product impressions',
	type: 'int',
	negative_ratio: false,
	options: {
		accumulator: 'sum',
	},
});


const listofMetrics = await metrics.index();
const listofMetrics = await metrics.index(
	// pagination
	{
	  page: 2,
	  per_page: 1,
	},
    // sorting
	{
	  field: 'id',
	  direction: 'desc',
	},
    // filtering by fields
	{
	  impressions: '18310', // TODO greaten/less than or equal to
	},
);

```
