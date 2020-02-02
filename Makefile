.PHONY: help

help:
	@echo "test		Runs unit tests with phpunit."
	@echo "apidocs		Generates the API Documentation."
	@echo "opendocs		Open API documentation (docs/index.html) in the default browser (OSX only)."

test:
	@echo "Running phpunit."
	./vendor/bin/phpunit

apidocs:
	@echo "Generating API docs."
	php sami.phar update sami-config.php

opendocs:
	@echo "Opening API documentation."
	open docs/index.html
