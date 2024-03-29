export interface GitRateLimit {
  title: 'Rate Limit Overview';
  description: 'Rate Limit Overview';
  type: 'object';
  properties: {
    resources: {
      type: 'object';
      properties: {
        core: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        graphql: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        search: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        source_import: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        integration_manifest: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        code_scanning_upload: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        actions_runner_registration: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
        scim: {
          title: 'Rate Limit';
          type: 'object';
          properties: {
            limit: {
              type: 'integer';
            };
            remaining: {
              type: 'integer';
            };
            reset: {
              type: 'integer';
            };
            used: {
              type: 'integer';
            };
          };
          required: ['limit', 'remaining', 'reset', 'used'];
        };
      };
      required: ['core', 'search'];
    };
    rate: {
      title: 'Rate Limit';
      type: 'object';
      properties: {
        limit: {
          type: 'integer';
        };
        remaining: {
          type: 'integer';
        };
        reset: {
          type: 'integer';
        };
        used: {
          type: 'integer';
        };
      };
      required: ['limit', 'remaining', 'reset', 'used'];
    };
  };
  required: ['rate', 'resources'];
}
