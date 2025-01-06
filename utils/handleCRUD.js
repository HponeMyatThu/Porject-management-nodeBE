const handleCRUD = (model) => async (req, res) => {
  const { method, body, params, query } = req;
  try {
    switch (method) {
      case 'POST': {
        const created = await model.create(body);
        return res.status(201).json(created);
      }

      case 'GET': {
        if (params.id) {
          const found = await model.findByPk(params.id);
          return found
            ? res.status(200).json(found)
            : res.status(404).json({ message: `${model.name} not found` });
        } else if (Object.keys(query).length) {
          // Search by query parameters
          const where = {};
          for (const key in query) {
            where[key] = query[key];
          }
          const results = await model.findAll({ where });
          return results.length
            ? res.status(200).json(results)
            : res.status(404).json({ message: `${model.name} not found` });
        } else {
          // Fetch all records
          const all = await model.findAll();
          return res.status(200).json(all);
        }
      }

      case 'PUT': {
        if (params.id) {
          const [updated] = await model.update(body, {
            where: { id: params.id },
          });
          return updated
            ? res.status(200).json(await model.findByPk(params.id))
            : res.status(404).json({ message: `${model.name} not found` });
        }
        return res.status(400).json({ message: 'ID is required for updates' });
      }

      case 'DELETE': {
        if (params.id) {
          const deleted = await model.destroy({
            where: { id: params.id },
          });
          return deleted
            ? res.status(204).send()
            : res.status(404).json({ message: `${model.name} not found` });
        }
        return res.status(400).json({ message: 'ID is required for deletion' });
      }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handleCRUD;
