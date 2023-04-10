import { UploadMiddleware } from './multer.middleware';

describe('UploadMiddleware', () => {
  it('should be defined', () => {
    expect(new UploadMiddleware()).toBeDefined();
  });
});
