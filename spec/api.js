import { getFiles } from '../app/api';
describe("Api", function(){

	it("should be able to get a file list", function(done) {
		getFiles(".").then(result => {
			expect(result[0]).not.toBe(undefined);
			done();
		});
	});
	
});