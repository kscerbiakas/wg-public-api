## CRUD wrapper around WG Public API 
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


await metrics.index();
const metricIndex = await metrics.index(
	{
		page: 2,
		per_page: 1,
	},
	{
		field: 'id',
		direction: 'desc',
	},
	{
		impressions: '18310', // TODO greater/less than or equal to
	},
);

metricIndex.data // to access metric list 


await metrics.update (123, {
	name: 'impressions',
	external_id: 'impressions',
	negative_ratio: true,
	type: 'int',
	options: {
		accumulator: 'sum',
	},
});

```

### Dimensions

```typescript
const dimensions = client.dimensions ();

await dimensions.index(); 
await dimensions.index(
	{
		page: 2,
		per_page: 1,
	},
	{
		field: 'id',
		direction: 'desc',
	},
	{
		device_size: 'small',
	},
);

const dimension = await dimensions.create({
	external_id: 'device_size',
	name: 'Device size',
	type: 'string',
})

const updatedDimension = await dimensions.update(3815, {
	external_id: 'block_size',
	name: 'Block size',
	type: 'string',
});

// delete
await dimensions.delete(3815);
```

### Integration source data point. 

```typescript

const integrationData = client.integrationSourceDataPoints();

await integrationData.index();

await integrationData.create({
	date: '2020-01-20',
	integration_data: {
		// your data in json for a single day. must include 'date' key
		date: '2020-01-20',
	},
});

await integrationData.update('AASF123', {
	date: '2020-01-20',
	integration_data: {
		impressions: '1000000',
		clicks_per_post: '10000',
		date: '2020-01-20',
	},
});


await integrationData.delete('AASF123');
```
