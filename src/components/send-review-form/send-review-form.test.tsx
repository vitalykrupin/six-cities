import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {SendReviewForm} from './send-review-form';

describe(`SendReviewForm`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <SendReviewForm
            id={1}
            submitForm={jest.fn()}
            updateForm={jest.fn()}
            onTextareaChange={jest.fn()}
            onRadioClick={jest.fn()}
            isValidated={true}
            isReviewSending={false}
            didReviewSent={false}
            sendError={`no`}
            resetFormState={jest.fn()}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
