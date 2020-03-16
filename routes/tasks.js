router.prefix('/tasks')

router.post('/add', async (ctx, next) => {
  await store.createTask(ctx.request.body.title)
  ctx.redirect('/')
})

module.exports = router
