import { Request, Response, NextFunction } from 'express';

export default (config: object) => (req: Request, res: Response, next: NextFunction): void => {
    const { body: propFromBody, params: propFromParams, query: propFromQuery }: any = req;
// const { body: propFromBody, query: propFromQuery } = req
   // const propFromBody: any = req.body; // savind value from body
   // const propFromParams: any = req.params; // saving value from Params
   // const propFromQuery: any = req.query; // Saving value from Query
    const errorsArray: any = [];    // Adding errors together
    const validationKeys: any = Object.keys(config); // getting keys from request recieved

    console.log(req.body);
    validationKeys.forEach(validateKey => {
        const propOfKey = config[ validateKey ]; // Adding keys
        let requireFlag = false;    // Flag to check required condition

    const errorchecker = ( valRuleError: any , valKeyError: any) => {
         if (Object.keys(valRuleError).includes('errorMessage') || Object.keys(valRuleError).includes('in')) {
                errorsArray.push( `key : ${validateKey}`, `location : ${ valRuleError.in } `, `errorMessage : ${valRuleError.errorMessage}`);
            }
         else if ( Object.values(valRuleError).includes('custom')) {
                errorsArray.push(`Custom Error Message is : ${valRuleError.custom(valKeyError)}`);
            }
         else {
                errorsArray.push('error is occured');
            }
            };

    if (Object.keys(propOfKey).includes('in')) {
        if (
             (propOfKey.in.includes('body') && Object.keys(propFromBody).includes(validateKey))
              || (propOfKey.in.includes('params') && Object.keys(propFromParams).includes(validateKey))
              || (propOfKey.in.includes('query') && Object.keys(propFromQuery).includes(validateKey))
            ) {
                 if (Object.keys(propOfKey).includes('required') )  {
                    if (propOfKey.required === true) {
                            requireFlag = true;
                    }
                    // } else if (propOfKey.required === false || Object.keys(propFromBody).includes(validateKey) ) {
                    //         requireFlag = true;
                    //       }
                    }
                if (requireFlag === true) {
                    if (Object.keys(propOfKey).includes('string')) {
                        if (propOfKey.string && typeof propFromBody[validateKey] === 'string' ) {//
                        }
                        else {
                            errorchecker (propOfKey, validateKey );
                        }
                    }
                    if (Object.keys(propOfKey).includes('number')) {
                        if (propOfKey.number === true && typeof propFromBody[validateKey] === 'number' ) {//
                        }
                        else {
                            errorchecker (propOfKey, validateKey );
                        }
                    }
                    // if (Object.keys(propOfKey).includes('isObject')) {
                    //     if ( !(propFromBody[validateKey]  === true) ) {//
                            
                    //     }
                    //     else {
                    //         errorchecker (propOfKey, validateKey );
                    //     }
                    // }
                    if (Object.keys(propOfKey).includes('default')) {
                        if ( (propOfKey.default === '0' && propFromBody[validateKey] === 'skip' )
                        || (propOfKey.default === '10' && propFromBody[validateKey] === 'limit' )) {//
                        }
                        else {
                            errorchecker (propOfKey, validateKey );
                        }
                    }
                }
           }
                else  {
                    errorchecker (propOfKey, validateKey );
                }
    }
  });
    if (errorsArray.length > 0) {
   res.send(errorsArray);
  }
    else {
          next();
    }
};
