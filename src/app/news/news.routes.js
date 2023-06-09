const { auth } = require('../../middlewares');

module.exports = ({
    router,
    NewsController,
    makeExpressCallback,
    makeValidatorCallback,
    NewsValidator,
}) => {
    
        // auth
        // router.use(auth);
    
        // get all news
        router.get(
            '/', 
            makeExpressCallback(NewsController.getAllNews));
    
        // get news by id
        router.get(
            '/:id', 
            makeValidatorCallback(NewsValidator.getNewsByIdSchema),
            makeExpressCallback(NewsController.getNewsById),
        );
    
        // get news by keyword
        router.get(
            '/keyword/:keyword',
            makeValidatorCallback(NewsValidator.getNewsByKeywordSchema),
            makeExpressCallback(NewsController.getNewsByKeyword),
        );

        // create news
        router.post(
            '/create',
            makeValidatorCallback(NewsValidator.createNewsSchema),
            makeExpressCallback(NewsController.createNews),
        );

        return router;
}